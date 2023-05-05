
import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
    function handleChange(event) {
        setSearchTerm(event.target.value);
      }
  return (
    <>
    
    <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
    {/* <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} /> */}

    
    </>
  )
}

export default Search















// import React,{useState} from 'react'
// import { FaSearch } from "react-icons/fa";
// import { useRef } from 'react';


// const Search = ({searchTerm, setSearchTerm}) => {

//     const [showInput, setShowInput] = useState(false);
//   const inputRef = useRef(null);


//     const handleChange = event => {
//         setSearchTerm(event.target.value);
//       };

//     const handleClick = async () => {
//       setShowInput(!showInput);
//       if (!showInput.current) {
//         inputRef.current.focus();
//       }
//     };
    

  
//     const handleSearch = () => {
//       console.log('Performing search for:', searchTerm);
//     }
//   return (
//     <>
    
//     <div className=" ml-auto">
//       <FaSearch className="search-icon " onClick={handleClick} />
//       {showInput && <input type="text" placeholder="Search"  className='' onChange={handleChange} value={searchTerm} onBlur={handleClick}
//           onKeyUp={event => event.key === 'Enter' && handleSearch()}
//           ref={inputRef}/>}

//     </div>

//     </>
//   )
// }

// export default Search