// import { useState } from "react";
// import CircleLoader from "react-spinners/CircleLoader";
// import { motion } from "framer-motion"; // Import motion from framer-motion
// import "./App.css";

// const App = () => {
//   const [img, setimg] = useState(null);
//   const [name, setname] = useState("");
//   const [mode, setmode] = useState("light");
//   const [load, setload] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false); // Track modal state
//   const [selectedImage, setSelectedImage] = useState(null); // Track selected image

//   const modechange = () => {
//     if (mode == "light") {
//       setmode("dark");
//     } else if (mode == "dark") {
//       setmode("light");
//     }
//   };

//   const sty = {
//     color: mode == "light" ? "black" : "white",
//     border: mode == "light" ? "1px solid black" : "1px solid white",
//     backgroundColor: mode == "light" ? "white" : "black",
//   };
//   const styc = {
//     color: mode == "light" ? "black" : "white",
//     backgroundColor: mode == "light" ? "white" : "black",
//   };
//   const isty = {
//     color: mode == "light" ? "black" : "white",
//     backgroundColor: mode == "light" ? "white" : "#363535",
//   };
//   const sbs = {
//     backgroundColor: mode == "light" ? "black" : "rgb(0,191,255)",
//   };

//   const search = (e) => {
//     setname(e?.target.value);
//   };

//   const click = (e) => {
//     e.preventDefault();
//     setload(true);
//     fetch(`https://api.pexels.com/v1/search?query=${name}&per_page=45`, {
//       method: "GET",
//       headers: {
//         Authorization:
//           "yAt9NvjN4rln3RvP20tk1xXK8JiQ8kOKfOonKSlTavUBZrNoameEPfE5",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         setimg(res.photos);
//         setload(false);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedImage(null);
//   };

//   return (
//     <div id="king-cont" style={styc}>
//       <motion.button
//         id="mode"
//         onClick={modechange}
//         style={sty}
//         whileHover={{ scale: 1.1 }} // Hover effect for button
//         transition={{ duration: 0.3 }}
//       >
//         {mode}
//       </motion.button>
//       <div id="header" style={styc}>
//         Image search
//       </div>
//       <div className="bar-area">
//         <form id="f" onSubmit={click}>
//           <motion.input
//             type="text"
//             className="inbar"
//             style={isty}
//             onChange={search}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           ></motion.input>
//           <motion.button
//             id="sb"
//             type="submit"
//             style={sbs}
//             whileHover={{ scale: 1.1 }} // Hover effect for button
//             transition={{ duration: 0.3 }}
//           >
//             Search
//           </motion.button>
//         </form>
//       </div>
//       <div id="content">
//         {img == null && !load && (
//           <motion.div
//             id="message"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             Hallo, search the web!
//           </motion.div>
//         )}
//         {load && (
//           <motion.div
//             id="loader"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <CircleLoader
//               color={mode == "light" ? "#431894" : "#36d7b7"}
//               loading={load}
//               size={120}
//             />
//           </motion.div>
//         )}
//         {!load &&
//           img?.map((data) => {
//             return (
//               <motion.div
//                 key={data.id}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <motion.img
//                   id="image"
//                   src={data.src.small}
//                   style={{
//                     border:
//                       mode == "light" ? "1px solid black" : "1px solid white",
//                   }}
//                   whileHover={{
//                     scale: 1.4, // Hover effect for scaling
//                     boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)", // Increased shadow intensity
//                   }}
//                   transition={{ duration: 0.3 }}
//                   onClick={() => openModal(data.src.large)} // Open modal on image click
//                 />
//               </motion.div>
//             );
//           })}
//       </div>

//       {/* Modal Implementation */}
//       {modalOpen && (
//         <motion.div
//           id="modal"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           transition={{ duration: 0.3 }}
//           onClick={closeModal}
//         >
//           <motion.img
//             src={selectedImage}
//             alt="Selected"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//             style={{
//               width: "80%",
//               height: "auto",
//               borderRadius: "8px",
//               boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)", // Increased shadow intensity for modal image
//             }}
//           />
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default App;

import { useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./App.css";

const App = () => {
  const [img, setimg] = useState(null);
  const [name, setname] = useState("");
  const [mode, setmode] = useState("light");
  const [load, setload] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // Track modal state
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image
  const [imageDetails, setImageDetails] = useState(null); // Track selected image details

  const modechange = () => {
    if (mode == "light") {
      setmode("dark");
    } else if (mode == "dark") {
      setmode("light");
    }
  };

  const sty = {
    color: mode == "light" ? "black" : "white",
    border: mode == "light" ? "1px solid black" : "1px solid white",
    backgroundColor: mode == "light" ? "white" : "black",
  };
  const styc = {
    color: mode == "light" ? "black" : "white",
    backgroundColor: mode == "light" ? "white" : "black",
  };
  const isty = {
    color: mode == "light" ? "black" : "white",
    backgroundColor: mode == "light" ? "white" : "#363535",
  };
  const sbs = {
    backgroundColor: mode == "light" ? "black" : "rgb(0,191,255)",
  };

  const search = (e) => {
    setname(e?.target.value);
  };

  const click = (e) => {
    e.preventDefault();
    setload(true);
    fetch(`https://api.pexels.com/v1/search?query=${name}&per_page=45`, {
      method: "GET",
      headers: {
        Authorization:
          "yAt9NvjN4rln3RvP20tk1xXK8JiQ8kOKfOonKSlTavUBZrNoameEPfE5",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setimg(res.photos);
        setload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openModal = (image, details) => {
    setSelectedImage(image);
    setImageDetails(details);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
    setImageDetails(null);
  };

  return (
    <div id="king-cont" style={styc}>
      <motion.button
        id="mode"
        onClick={modechange}
        style={sty}
        whileHover={{ scale: 1.1 }} // Hover effect for button
        transition={{ duration: 0.3 }}
      >
        {mode}
      </motion.button>
      <div id="header" style={styc}>
        Image search
      </div>
      <div className="bar-area">
        <form id="f" onSubmit={click}>
          <motion.input
            type="text"
            className="inbar"
            style={isty}
            onChange={search}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.input>
          <motion.button
            id="sb"
            type="submit"
            style={sbs}
            whileHover={{ scale: 1.1 }} // Hover effect for button
            transition={{ duration: 0.3 }}
          >
            Search
          </motion.button>
        </form>
      </div>
      <div id="content">
        {img == null && !load && (
          <motion.div
            id="message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hallo, search the web!
          </motion.div>
        )}
        {load && (
          <motion.div
            id="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <CircleLoader
              color={mode == "light" ? "#431894" : "#36d7b7"}
              loading={load}
              size={120}
            />
          </motion.div>
        )}
        {!load &&
          img?.map((data) => {
            return (
              <motion.div
                key={data.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  id="image"
                  src={data.src.small}
                  style={{
                    border:
                      mode == "light" ? "1px solid black" : "1px solid white",
                  }}
                  whileHover={{
                    scale: 1.4, // Hover effect for scaling
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)", // Increased shadow intensity
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={
                    () =>
                      openModal(data.src.large, {
                        title: data.photographer,
                        description: data.alt,
                        author: data.photographer,
                      }) // Open modal with image details
                  }
                />
              </motion.div>
            );
          })}
      </div>

      {/* Modal Implementation */}
      {modalOpen && (
        <motion.div
          id="modal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={closeModal}
        >
          <motion.img
            src={selectedImage}
            alt="Selected"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)", // Increased shadow intensity for modal image
            }}
          />
          <div style={{ marginTop: "20px", color: "white" }}>
            <h3>{imageDetails?.title}</h3>
            <p>{imageDetails?.description}</p>
            <small>Author: {imageDetails?.author}</small>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
