// Comprehensive navigation utility for Saray Estetica
// Handles universal navigation, active states, and smart page routing

export interface NavigationState {
  currentPage: string;
  activeSection: string;
  activeTreatmentCategory: string | null;
}

export interface TreatmentCategory {
  id: string;
  label: string;
  hash: string;
}

// Treatment categories with their corresponding hash values
export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  { id: 'dental', label: 'Dental Treatments', hash: '#dental-treatments' },
  { id: 'nose-face-aesthetics', label: 'Nose & Face Aesthetics', hash: '#nose-face-aesthetics' },
  { id: 'body-aesthetics', label: 'Body Aesthetics', hash: '#body-aesthetics' },
  { id: 'hair-restoration', label: 'Hair Restoration', hash: '#hair-restoration' },
  { id: 'weight-loss', label: 'Weight-Loss Treatments', hash: '#weight-loss-treatments' }
];

// Navigation state management
class NavigationManager {
  private static instance: NavigationManager;
  private state: NavigationState = {
    currentPage: 'home',
    activeSection: 'home',
    activeTreatmentCategory: null
  };
  private listeners: ((state: NavigationState) => void)[] = [];

  static getInstance(): NavigationManager {
    if (!NavigationManager.instance) {
      NavigationManager.instance = new NavigationManager();
    }
    return NavigationManager.instance;
  }

  // Subscribe to navigation state changes
  subscribe(listener: (state: NavigationState) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // Get current navigation state
  getState(): NavigationState {
    return { ...this.state };
  }

  // Update navigation state and notify listeners
  private updateState(newState: Partial<NavigationState>): void {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(listener => listener(this.state));
  }

  // Check if we're on the homepage
  isHomePage(): boolean {
    const path = window.location.pathname.replace(
      import.meta.env.BASE_URL || "/",
      "/"
    );
    return path === "/" || path === "";
  }

  // Get current page type
  getCurrentPageType(): string {
    const path = window.location.pathname.replace(
      import.meta.env.BASE_URL || "/",
      "/"
    );

    if (path.startsWith("/admin")) return "admin";
    if (path.includes("/treatments/")) return "treatment-details";
    if (path.includes("/about")) return "about";
    if (path.includes("/blog/")) return "blog-post";
    if (path.includes("/blog")) return "blog";
    return "home";
  }

  // Navigate to treatment category with smart routing
  navigateToTreatmentCategory(categoryId: string): void {
    const category = TREATMENT_CATEGORIES.find(cat => cat.id === categoryId);
    if (!category) return;

    const isHome = this.isHomePage();
    
    if (isHome) {
      // On homepage: scroll to section and set active state
      this.scrollToTreatmentSection(category);
    } else {
      // On other pages: redirect to homepage with hash
      this.redirectToHomeWithHash(category.hash);
    }

    // Update active state
    this.updateState({
      activeSection: 'treatments',
      activeTreatmentCategory: categoryId
    });
  }

  // Scroll to treatment section on homepage
  private scrollToTreatmentSection(category: TreatmentCategory): void {
    // First, add URL parameter for TreatmentsSection to pick up
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("category", category.id);
    window.history.replaceState({}, "", currentUrl.toString());

    // Scroll to treatments section
    const treatmentsElement = document.getElementById("treatments");
    if (treatmentsElement) {
      treatmentsElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  // Redirect to homepage with hash
  private redirectToHomeWithHash(hash: string): void {
    const base = import.meta.env.BASE_URL || "/";
    const newUrl = `${base}${hash}`;
    
    // Use pushState to maintain browser history
    window.history.pushState({}, "", newUrl);
    
    // Trigger navigation to home page
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  // Handle hash navigation on page load
  handleHashNavigation(): void {
    const hash = window.location.hash;
    if (!hash) return;

    const category = TREATMENT_CATEGORIES.find(cat => cat.hash === hash);
    if (category) {
      // Set active treatment category
      this.updateState({
        activeSection: 'treatments',
        activeTreatmentCategory: category.id
      });

      // Scroll to section after a short delay
      setTimeout(() => {
        this.scrollToTreatmentSection(category);
      }, 100);
    } else {
      // Handle other hash navigation (like #faq, #contact, etc.)
      const targetId = hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }

  // Update active section based on scroll position
  updateActiveSection(): void {
    const sections = [
      { id: "home", navId: "home" },
      { id: "treatments", navId: "treatments" },
      { id: "trust-results", navId: "before-after" },
      { id: "faq", navId: "faq" },
      { id: "contact", navId: "contact" },
    ];
    
    const scrollPosition = window.scrollY + 120; // Account for header height

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          this.updateState({ activeSection: section.navId });
          break;
        }
      }
    }
  }

  // Initialize navigation manager
  initialize(): (() => void) | void {
    // Set initial page type
    this.updateState({ currentPage: this.getCurrentPageType() });

    // Handle hash navigation on load
    if (this.isHomePage()) {
      this.handleHashNavigation();
    }

    // Set up scroll listener for active section updates
    if (this.isHomePage()) {
      const handleScroll = () => this.updateActiveSection();
      window.addEventListener("scroll", handleScroll);
      
      // Cleanup function
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }
}

// Export singleton instance
export const navigationManager = NavigationManager.getInstance();

// Utility functions for easy access
export const navigateToTreatmentCategory = (categoryId: string) => {
  navigationManager.navigateToTreatmentCategory(categoryId);
};

export const getNavigationState = () => {
  return navigationManager.getState();
};

export const subscribeToNavigation = (listener: (state: NavigationState) => void) => {
  return navigationManager.subscribe(listener);
};

export const initializeNavigation = () => {
  return navigationManager.initialize();
};
