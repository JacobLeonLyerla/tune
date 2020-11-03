import React from "react";
import { createIntl, createIntlCache } from "react-intl";
function ReactIntl() {
  // Translated messages in French with matching IDs to what you declared
  const messagesInEnglish = {
    myMessage: "Current Date: {ts, date, ::yyyyMMdd}",
  };

  // This is optional but highly recommended
  // since it prevents memory leak
  const cache = createIntlCache();

  // Create the `intl` object
  const intl = createIntl(
    {
      // Locale of the application
      locale: "en",
      // Locale of the fallback defaultMessage
      defaultLocale: "en",
      messages: messagesInEnglish,
    },
    cache
  );

  console.log(intl.formatNumber(19, { style: "currency", currency: "USD" }));

  return(
  <div>{ intl.formatMessage(
    {
      // Matching ID as above
      id: "myMessage",
      // Default Message in English
      defaultMessage: "Today is {ts, date, ::yyyyMMdd}",
    },
    { ts: Date.now() }
  )}</div>
  )
}
export default ReactIntl;
