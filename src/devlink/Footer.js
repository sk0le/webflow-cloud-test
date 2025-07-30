"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer-light")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-wrapper-two")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "footer-brand")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a332512aaee_placeholder-1.svg"
            />
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-block-two")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-title")}
              tag="div"
            >
              {"Company"}
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link-two")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"How it works"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link-two")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Pricing"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link-two")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Docs"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-block-two")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-title")}
              tag="div"
            >
              {"Quick Link"}
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link-two")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Pricing"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link-two")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Resources"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.FormWrapper className={_utils.cx(_styles, "footer-form")}>
            <_Builtin.FormForm
              className={_utils.cx(_styles, "footer-form-container")}
              name="wf-form-Footer-Form"
              data-name="Footer Form"
              method="get"
              id="wf-form-Footer-Form"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-title")}
                tag="div"
              >
                {"Subscribe"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-form-block")}
                tag="div"
              >
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "footer-form-field")}
                  autoFocus={false}
                  maxLength={256}
                  name="Footer-Email"
                  data-name="Footer Email"
                  placeholder="Get product updates"
                  type="email"
                  disabled={false}
                  required={true}
                  aria-label="Get product updates"
                  id="Footer-Email"
                />
                <_Builtin.FormButton
                  className={_utils.cx(_styles, "footer-form-submit")}
                  type="submit"
                  data-wait="Please wait..."
                />
              </_Builtin.Block>
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage>
              <_Builtin.Block tag="div">
                {"Thank you! Your submission has been received!"}
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage>
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-divider-two")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-bottom")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-copyright")}
            tag="div"
          >
            {"© 2022 Company name. All rights reserved"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-social-block-two")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-social-link")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ac76f12aaec_product%20icon-2.svg"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-social-link")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a4a9512aae0_product%20icon-1.svg"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-social-link")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a853712aad7_product%20icon.svg"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
