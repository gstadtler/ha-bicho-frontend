import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Container, Button } from 'reactstrap';
import { FaFileUpload } from 'react-icons/fa';

import './styles.css';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

function ImageInput({ styling, handleSubmit }) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: true,
    maxSize: 2097152,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          alt={file.name}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const submitImages = () => {
    handleSubmit(files);
  }

  return (
    <>
      <Container className="mt-4" fluid={true}>
        <div {...getRootProps({ className: styling })}>
          <input {...getInputProps()} />
          <p>Arraste imagens pra cá, ou clique para selecionar</p>
          <FaFileUpload
            size={50}
            style={{
              color: "#333366",
              cursor: "pointer"
            }}
          />
        </div>
        <aside style={thumbsContainer}>
          {thumbs}
        </aside>
      </Container>
      <Button
        style={{
          background: "#333366",
          display: "flex",
          alignContent: "center",
          margin: "auto",
          marginBottom: "20px",
          padding: "10px 50px"
        }}
        onClick={submitImages}
      >
        Enviar
      </Button>
    </>
  );
}

export default ImageInput;
