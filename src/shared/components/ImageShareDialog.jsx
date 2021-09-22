import React, { useState } from "react";
import styled from "styled-components";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { AiFillCopy } from "react-icons/ai";
import { IconButton } from "@mui/material";

export const ImageShareDialog = ({ open, onClose, link }) => {
  const [copied, setCopied] = useState(false);
  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose();
        setCopied(false);
      }}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle>Share this image!</DialogTitle>
      <div style={{ padding: "1rem" }}>
        <TextWrapper>
          <Text>{link}</Text>
          <IconButton
            onClick={() => {
              navigator.clipboard.writeText(link);
              setCopied(true);
            }}
          >
            <AiFillCopy size="1.5rem" color="#646464" />
          </IconButton>
        </TextWrapper>
      </div>
      {copied && (
        <div style={{ padding: "0 2rem 1rem 2rem" }}>
          <CopiedText>Copied!</CopiedText>
        </div>
      )}
    </Dialog>
  );
};

const TextWrapper = styled.div`
  background: #bcbcbc;
  border-radius: 9px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 0;
  font-family: Lato;
  font-style: italic;
  font-size: 18px;
  letter-spacing: 0.145em;
  color: #303030;
`;

const CopiedText = styled.p`
  margin: 0;
  color: #128d02;
`;
