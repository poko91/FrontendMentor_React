import { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";

export default function SearchBar({ setIp }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    setIp(value);
    e.target.reset();
  };

  return (
    <form className="search-bar-container" onSubmit={handleSubmit}>
      <input type="search" className="search-bar" placeholder="Search for any IP address or domain" ref={inputRef} />
      <button>
        <FaAngleRight />
      </button>
    </form>
  );
}
