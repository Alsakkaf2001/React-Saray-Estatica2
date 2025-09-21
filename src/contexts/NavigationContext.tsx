import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface NavigationContextType {
  activeSection: string;
  activeTreatmentCategory: string | null;
  setActiveSection: (section: string) => void;
  setActiveTreatmentCategory: (category: string | null) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [activeTreatmentCategory, setActiveTreatmentCategory] = useState<
    string | null
  >(null);

  // Listen for URL parameter changes
  useEffect(() => {
    const checkUrlParams = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get("category");
      if (category) {
        setActiveTreatmentCategory(category);
        setActiveSection("treatments");
      }
    };

    checkUrlParams();

    // Listen for URL changes
    const handleUrlChange = () => {
      checkUrlParams();
    };

    window.addEventListener("popstate", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        activeTreatmentCategory,
        setActiveSection,
        setActiveTreatmentCategory,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
