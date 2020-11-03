import React from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
function ReactIntl() {
  // Translated messages in French with matching IDs to what you declared
  const messagesInEnglish = {
    myMessage: "Current Date: {ts, date, ::yyyyMMdd}",
  };

  return (
    <IntlProvider messages={messagesInEnglish} locale="en" defaultLocale="en">
      <p>
        <FormattedMessage
          id="myMessage"
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ ts: Date.now() }}
        />
        <FormattedNumber value={19} style="currency" currency="USD" />
      </p>
    </IntlProvider>
  );
}
export default ReactIntl;
