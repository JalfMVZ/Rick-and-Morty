import styled from "styled-components";

export const VideoBackground = styled.div` 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1000;
`;

export const Video = styled.video` 
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  `;