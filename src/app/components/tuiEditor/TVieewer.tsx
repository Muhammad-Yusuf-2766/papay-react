import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";
import { Box, Stack } from "@mui/material";

const TViewer = (props: any) => {
  const editorRef = useRef<any>(null);

  return (
    <Stack sx={{ background: "white", mt: "30px", borderRadius: "10px" }}>
      <Box sx={{ m: "40px", height: "600px" }}>
        <Viewer
          // @ts-ignore
          ref={editorRef}
          initialValue={props.text}
        />
      </Box>
    </Stack>
  );
};

export default TViewer;
