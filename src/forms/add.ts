import {
  provideFluentDesignSystem,
  fluentTextField,
  fluentSelect,
  fluentOption,
  fluentButton,
  fluentRadio,
  fluentRadioGroup,
} from "@fluentui/web-components";

provideFluentDesignSystem().register(fluentTextField());
provideFluentDesignSystem().register(fluentSelect({ indicator: `...your indicator...` }), fluentOption());
provideFluentDesignSystem().register(fluentButton());
provideFluentDesignSystem().register(fluentRadio(), fluentRadioGroup());

Office.onReady((info) => {
  document.getElementById("subTypeBase").style.display = "none";
  document.getElementById("subTypeAddress").style.display = "none";
  document.getElementById("ocNumber").style.display = "none";
  document.getElementById("ctsNumber").style.display = "none";

});
