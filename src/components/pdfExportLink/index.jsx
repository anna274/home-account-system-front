import * as React from "react";
import { BlobProvider } from "@react-pdf/renderer";
import useStyles from './styles';
const PdfExportLink = ({ document }) => {
  const classes = useStyles();
  const { useState, useEffect } = React;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 0);
  }, []);

  if (!ready) {
    return null;
  } else {
    return (
      <BlobProvider document={document}>
        {({ url }) => {
          return <a className={classes.link} href={url} download>
           Экспортировать в PDF
          </a>
        }}
      </BlobProvider>
    );
  }
};

export default PdfExportLink;