import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View
} from "@react-pdf/renderer";
import * as React from "react";

export const styles = StyleSheet.create({
  font: { fontFamily: "Oswald" }
});

const fontSrc =
  "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf";
Font.register({ family: "Oswald", src: fontSrc });

const StatisticsPdf = ({ data }) => {
  const member = data[0];
  if (member) {
    return (
      <Document>
        <Page size="A4" style={styles.font}>
          <View>
            <Text>
              Name: {member.name.first} {member.name.last}
            </Text>
            <Text>Email: {member.email}</Text>
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