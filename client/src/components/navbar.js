import { NavLink, useLocation } from "react-router-dom";

export function NavBar() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <nav className="font-noto_sans_thai bg-pale-blue-gray border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="PSU Logo-01.png" className="h-8" alt="PSU Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ระบบตรวจสถานะนักศึกษา
          </span>
        </NavLink>

        <div
          className="bg-pale-blue-gray hidden w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-pale-blue-gray md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-pale-blue-gray dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                exact
                to="/home"
                className={
                  pathname === "/home"
                    ? "block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course"
                className={
                  pathname === "/course"
                    ? "block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                ค้นหาวิชาเรียน
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-study-plan"
                className={
                  pathname === "/my-study-plan"
                    ? "block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                หลักสูตรของฉัน
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                activeclassname="bg-blue-700 text-white"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                ออกจากระบบ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
