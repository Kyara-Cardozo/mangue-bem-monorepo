import { useState } from "react";
import { Link } from "react-router-dom";
import appString from "../utils/appStrings";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="flex h-20 items-center navbar">
      <div className="px-2 w-full sm:px-6 lg:px-8">
        <div className="relative flex w-full h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-16 w-auto"
                src="assets/logo.png"
                alt="mangue logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="bg-emerald-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  {appString.pt.home}
                </Link>
                <a
                  href="#"
                  className="text-slate-950 hover:bg-emerald-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  {appString.pt.about}
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-emerald-700 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
            <div>
              <Link
                to="/profile"
                type="button"
                className="relative  ml-4 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-6 w-6"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJjb2xvcjpjdXJyZW50Q29sb3IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImgtZnVsbCB3LWZ1bGwiPjxyZWN0IHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiByeD0iMzMiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2U9InRyYW5zcGFyZW50IiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1vcGFjaXR5PSIxMDAlIiBwYWludC1vcmRlcj0ic3Ryb2tlIj48L3JlY3Q+PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIiB4PSIwIiB5PSIwIiByb2xlPSJpbWciIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDRhOCA4IDAgMCAwLTYuOTYgMTEuOTQ3QTQuOTkgNC45OSAwIDAgMSA5IDE0aDZhNC45OSA0Ljk5IDAgMCAxIDMuOTYgMS45NDdBOCA4IDAgMCAwIDEyIDRabTcuOTQzIDE0LjA3NkE5Ljk1OSA5Ljk1OSAwIDAgMCAyMiAxMmMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwUzIgNi40NzcgMiAxMmE5Ljk1OCA5Ljk1OCAwIDAgMCAyLjA1NyA2LjA3NmwtLjAwNS4wMThsLjM1NS40MTNBOS45OCA5Ljk4IDAgMCAwIDEyIDIyYTkuOTQ3IDkuOTQ3IDAgMCAwIDUuNjc1LTEuNzY1YTEwLjA1NSAxMC4wNTUgMCAwIDAgMS45MTgtMS43MjhsLjM1NS0uNDEzbC0uMDA1LS4wMThaTTEyIDZhMyAzIDAgMSAwIDAgNmEzIDMgMCAwIDAgMC02WiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9nPjwvc3ZnPjwvc3ZnPg=="
                  alt="profile-circle-fill"
                ></img>
              </Link>
            </div>

            {/* <div className="relative ml-3">
              
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/"
            className="bg-emerald-500 text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            {appString.pt.home}
          </Link>
          <a
            href="#"
            className="text-slate-950 hover:bg-emerald-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            {appString.pt.about}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;