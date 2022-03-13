import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import * as React from 'react';

export const styles = StyleSheet.create({
  font: { fontFamily: 'Roboto' },
});

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
});

const StatisticsPdf = ({ report }) => {
  if (report) {
    return (
      <Document>
        <Page size="A4" style={styles.font}>
          <View>
            <Text>{report}</Text>
          </View>
        </Page>
      </Document>
    );
  } else
    return (
      <Document>
        <Page size="A4">
          <View>
            <Text>This Pdf could not be generated</Text>
          </View>
        </Page>
      </Document>
    );
};

export default StatisticsPdf;
