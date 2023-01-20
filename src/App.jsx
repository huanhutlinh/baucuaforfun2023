import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import AlertMsg from "./AlertMsg";
import Thau from "./images/thau.jpg";
import background from "./images/tet2023.jpeg";

function App() {
  const [box1, setBox1] = useState(1);
  const [box2, setBox2] = useState(1);
  const [box3, setBox3] = useState(1);
  const [isStart, setIsStart] = useState(true);

  const indexImage = 6;

  const handleChange = async () => {
    if (true) {
      await setBox1(Math.floor(Math.random() * indexImage) + 1);
      await setBox2(Math.floor(Math.random() * indexImage) + 1);
      await setBox3(Math.floor(Math.random() * indexImage) + 1);
      await toast.success("Đã Xốc Thành Công");
    } else {
      toast.error("Làm Ơn Đậy Nắp Đi Nào...");
    }
  };

  const hanldeClickOn = () => {
    setIsStart(false);
  };
  const hanldeClickOff = () => {
    setIsStart(true);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <AlertMsg />
        <Box sx={{ width: "639px", height: "359px", position: "relative" }}>
          <Box
            component="img"
            src="https://minhlong1.net/wp-content/uploads/2021/07/8de2d853429fe83be41530a7f404c54c-600x337.png"
            alt=""
            sx={{ width: "639px", height: "359px" }}
          />
          <Box
            component="img"
            src={`./images/${box1}.png`}
            sx={{
              position: "absolute",
              top: "120px",
              left: "210px",
              height: "70px",
              width: "90px",
            }}
            alt=""
          />
          <Box
            component="img"
            src={`./images/${box2}.png`}
            sx={{
              position: "absolute",
              top: "120px",
              right: "210px",
              height: "70px",
              width: "90px",
            }}
            alt=""
          />
          <Box
            component="img"
            src={`./images/${box3}.png`}
            sx={{
              position: "absolute",
              top: "200px",
              left: "275px",
              height: "70px",
              width: "90px",
            }}
            alt=""
          />
          <Box
            component="img"
            src={Thau}
            sx={{
              position: "absolute",
              width: "300px",
              height: "300px",
              left: isStart ? "170px" : "-130px",
              top: isStart ? "30px" : "30px",
              borderRadius: "50%",
            }}
            alt=""
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            padding: "0",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5336f4",
              ":hover": { backgroundColor: "#5336f4", opacity: 0.8 },
            }}
            onClick={hanldeClickOff}
          >
            Đậy Nắp
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffc400",
              color: "white",
              ":hover": { backgroundColor: "#ffc400", opacity: 0.8 },
            }}
            onClick={handleChange}
          >
            Xốc
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#388e3c",
              ":hover": { backgroundColor: "#388e3c", opacity: 0.8 },
            }}
            onClick={hanldeClickOn}
          >
            Mở Nắp
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;
