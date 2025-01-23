import { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function Dropdown({ children, trigger }) {
  const [show, setShow] = useState(false);
  const dropRef = useClickOutside(() => setShow(false));

  return (
    <div
      className="w-full relative z-50"
      ref={dropRef}
      onClick={() => setShow((curr) => !curr)}
    >
      <div>{trigger}</div>
      {show && (
        <ul className=" fixed ms:mt-2 tb:mt-3 right-0 bg-neutral-800 divide-y divide-neutral-700 shadow">
          {children}
        </ul>
      )}
    </div>
  );
}

export function DropdownItem({ children }) {
  return (
    <li className="flex gap-3 items-center px-10 py-2 ms:text-xs tb:text-base text-neutral-50 hover:bg-neutral-700 cursor-pointer">
      {children}
    </li>
  );
}
