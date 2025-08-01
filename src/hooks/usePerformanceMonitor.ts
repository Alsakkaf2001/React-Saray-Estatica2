import { useEffect } from 'react';

interface PerformanceMetrics {
  FCP?: number; // First Contentful Paint
  LCP?: number; // Largest Contentful Paint
  FID?: number; // First Input Delay
  CLS?: number; // Cumulative Layout Shift
  TTFB?: number; // Time to First Byte
}

const usePerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production and when Performance API is available
    if (process.env.NODE_ENV === 'development' || !window.performance) {
      return;
    }

    const metrics: PerformanceMetrics = {};

    // Measure First Contentful Paint (FCP)
    const paintObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          metrics.FCP = entry.startTime;
          console.log('FCP:', entry.startTime, 'ms');
        }
      }
    });

    paintObserver.observe({ entryTypes: ['paint'] });

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      metrics.LCP = lastEntry.startTime;
      console.log('LCP:', lastEntry.startTime, 'ms');
    });

    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        metrics.FID = (entry as any).processingStart - entry.startTime;
        console.log('FID:', metrics.FID, 'ms');
      }
    });

    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      metrics.CLS = clsValue;
      console.log('CLS:', clsValue);
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metrics.TTFB = navigationEntry.responseStart - navigationEntry.requestStart;
      console.log('TTFB:', metrics.TTFB, 'ms');
    }

    // Report metrics after page load
    const reportMetrics = () => {
      console.log('Performance Metrics:', metrics);
      
      // In production, you would send these metrics to your analytics service
      // Example: analytics.track('performance', metrics);
    };

    // Report metrics after 10 seconds to capture CLS
    setTimeout(reportMetrics, 10000);

    return () => {
      paintObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);
};

export default usePerformanceMonitor;