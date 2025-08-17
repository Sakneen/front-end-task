import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (hidden on small, visible on lg) */}
      <aside className="hidden lg:block fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-gray-700">Sidebar</h2>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex flex-col gap-4 p-4 text-gray-700">
          <a href="#" className="flex items-center gap-2 hover:text-blue-600">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7599 7.87396L8.85987 0.977531L8.39737 0.515031C8.29199 0.410346 8.14948 0.351593 8.00094 0.351593C7.8524 0.351593 7.70989 0.410346 7.60451 0.515031L0.242012 7.87396C0.134031 7.98152 0.0486929 8.10962 -0.00896676 8.2507C-0.0666264 8.39178 -0.0954385 8.54299 -0.0937027 8.69539C-0.0865598 9.32396 0.436654 9.82574 1.06523 9.82574H1.82415V15.6418H14.1777V9.82574H14.9527C15.2581 9.82574 15.5456 9.7061 15.7617 9.49003C15.868 9.38398 15.9523 9.25788 16.0097 9.11902C16.067 8.98017 16.0962 8.83132 16.0956 8.6811C16.0956 8.37753 15.9759 8.09003 15.7599 7.87396ZM9.00094 14.3561H7.00094V10.7132H9.00094V14.3561ZM12.892 8.54003V14.3561H10.1438V10.2847C10.1438 9.89003 9.82415 9.57039 9.42951 9.57039H6.57237C6.17772 9.57039 5.85808 9.89003 5.85808 10.2847V14.3561H3.10987V8.54003H1.39558L8.00272 1.93825L8.41523 2.35075L14.6081 8.54003H12.892Z"
                fill="black"
              />
            </svg>
            <span>Units</span>
          </a>
        </nav>
      </aside>

      {/* Content Wrapper */}
      <div className="flex-1 lg:ml-64">
        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
