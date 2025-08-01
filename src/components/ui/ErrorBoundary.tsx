import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import Button from "./Button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Error Icon */}
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>

              {/* Error Message */}
              <h1 className="text-2xl font-bold text-text-primary mb-4">
                Something went wrong
              </h1>
              <p className="text-gray-600 mb-8">
                We're sorry for the inconvenience. An unexpected error occurred.
                Please try refreshing the page or return to the homepage.
              </p>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  onClick={this.handleReload}
                  className="w-full flex items-center justify-center"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reload Page
                </Button>
                <Button
                  variant="outline"
                  onClick={this.handleGoHome}
                  className="w-full flex items-center justify-center"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go to Homepage
                </Button>
              </div>

              {/* Error Details (Development Mode) */}
              {process.env.NODE_ENV === "development" && this.state.error && (
                <details className="mt-8 text-left">
                  <summary className="cursor-pointer text-sm font-medium text-gray-500 mb-2">
                    Error Details (Development)
                  </summary>
                  <div className="bg-gray-100 rounded p-4 text-xs font-mono text-gray-700 overflow-auto max-h-40">
                    <div className="mb-2">
                      <strong>Error:</strong> {this.state.error.toString()}
                    </div>
                    {this.state.errorInfo && (
                      <div>
                        <strong>Component Stack:</strong>
                        <pre className="whitespace-pre-wrap">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              )}
            </div>

            {/* Support Information */}
            <div className="mt-6 text-sm text-gray-500">
              <p>
                If this problem persists, please contact our support team at{" "}
                <a
                  href="mailto:support@sarayestetic.com"
                  className="text-primary-500 hover:underline"
                >
                  support@sarayestetic.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
