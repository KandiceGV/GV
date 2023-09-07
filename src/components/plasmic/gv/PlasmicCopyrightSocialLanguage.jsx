// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mzuCRszeeZdCMSdpkmycrs
// Component: rNf4ukAwNfeE
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: ZhULiaU9WIpl/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_gv.module.css"; // plasmic-import: mzuCRszeeZdCMSdpkmycrs/projectcss
import sty from "./PlasmicCopyrightSocialLanguage.module.css"; // plasmic-import: rNf4ukAwNfeE/css
import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: rF8V5e3ucGKP/icon
import YoutubeIcon from "./icons/PlasmicIcon__Youtube"; // plasmic-import: B2StA8U5GyXL/icon
import PintrestIcon from "./icons/PlasmicIcon__Pintrest"; // plasmic-import: q5hvZ3w8Ik_T/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: 5ythh4Nf7eOS/icon

createPlasmicElementProxy;

export const PlasmicCopyrightSocialLanguage__VariantProps = new Array();

export const PlasmicCopyrightSocialLanguage__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicCopyrightSocialLanguage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__e4DXl)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__bsZ6J)}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"\u00a9 2021 ShoeShop, Inc. All Rights Reserved."}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__i6EC)}>
            <Button
              iconOnly={true}
              link={"http://twitter.com"}
              startIcon={
                <TwitterIcon
                  className={classNames(projectcss.all, sty.svg__jekCk)}
                  role={"img"}
                />
              }
              submitsForm={true}
            />

            <Button
              className={classNames("__wab_instance", sty.button__pl8QY)}
              iconOnly={true}
              link={"http://youtube.com"}
              startIcon={
                <YoutubeIcon
                  className={classNames(projectcss.all, sty.svg__mdEeJ)}
                  role={"img"}
                />
              }
              submitsForm={true}
            />

            <Button
              className={classNames("__wab_instance", sty.button__j74E)}
              iconOnly={true}
              link={"http://pinterest.com"}
              startIcon={
                <PintrestIcon
                  className={classNames(projectcss.all, sty.svg___7E2KN)}
                  role={"img"}
                />
              }
              submitsForm={true}
            />
          </div>
        </p.Stack>
        <Button
          className={classNames("__wab_instance", sty.button___84CVx)}
          endIcon={
            <Icon15Icon
              className={classNames(projectcss.all, sty.svg___6194M)}
              role={"img"}
            />
          }
          showEndIcon={true}
          startIcon={
            <Icon15Icon
              className={classNames(projectcss.all, sty.svg__ionl2)}
              role={"img"}
            />
          }
          submitsForm={true}
        >
          {"English"}
        </Button>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCopyrightSocialLanguage__ArgProps,
          internalVariantPropNames: PlasmicCopyrightSocialLanguage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCopyrightSocialLanguage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCopyrightSocialLanguage";
  } else {
    func.displayName = `PlasmicCopyrightSocialLanguage.${nodeName}`;
  }
  return func;
}

export const PlasmicCopyrightSocialLanguage = Object.assign(
  // Top-level PlasmicCopyrightSocialLanguage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicCopyrightSocialLanguage
    internalVariantProps: PlasmicCopyrightSocialLanguage__VariantProps,
    internalArgProps: PlasmicCopyrightSocialLanguage__ArgProps
  }
);

export default PlasmicCopyrightSocialLanguage;
/* prettier-ignore-end */