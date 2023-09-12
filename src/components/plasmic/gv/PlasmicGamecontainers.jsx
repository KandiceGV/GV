// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mzuCRszeeZdCMSdpkmycrs
// Component: FudiOxfuM-P6
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantscWoeu4D18NgU } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CWoeu4d18NgU/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_gv.module.css"; // plasmic-import: mzuCRszeeZdCMSdpkmycrs/projectcss
import sty from "./PlasmicGamecontainers.module.css"; // plasmic-import: FudiOxfuM-P6/css
import palmspngC4DbbcUxnl94 from "./images/palmspng.png"; // plasmic-import: c4DbbcUxnl94/picture

createPlasmicElementProxy;

export const PlasmicGamecontainers__VariantProps = new Array("small");

export const PlasmicGamecontainers__ArgProps = new Array("link", "img");

function PlasmicGamecontainers__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          img: {
            src: palmspngC4DbbcUxnl94,
            fullWidth: 736,
            fullHeight: 424,
            aspectRatio: undefined
          }
        },
        props.args
      ),

    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "small",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.small
      },
      {
        path: "variable",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      }
    ],

    [$props, $ctx, $refs]
  );

  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscWoeu4D18NgU()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootsmall]: hasVariant($state, "small", "small") }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <a
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link, {
          [sty.linksmall]: hasVariant($state, "small", "small")
        })}
        href={args.link}
      >
        <p.PlasmicImg
          data-plasmic-name={"palms"}
          data-plasmic-override={overrides.palms}
          alt={""}
          className={classNames(sty.palms, {
            [sty.palmssmall]: hasVariant($state, "small", "small")
          })}
          displayHeight={"auto"}
          displayMaxHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? "100%"
              : "150px"
          }
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? "100%"
              : "150px"
          }
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly") ? "auto" : "auto"
          }
          src={args.img}
        />

        {(
          hasVariant($state, "small", "small") && triggers.hover_root
            ? true
            : false
        ) ? (
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox, {
              [sty.freeBoxsmall]: hasVariant($state, "small", "small")
            })}
          />
        ) : null}
      </a>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "link", "palms", "freeBox"],
  link: ["link", "palms", "freeBox"],
  palms: ["palms"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicGamecontainers__ArgProps,
          internalVariantPropNames: PlasmicGamecontainers__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicGamecontainers__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGamecontainers";
  } else {
    func.displayName = `PlasmicGamecontainers.${nodeName}`;
  }
  return func;
}

export const PlasmicGamecontainers = Object.assign(
  // Top-level PlasmicGamecontainers renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    palms: makeNodeComponent("palms"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicGamecontainers
    internalVariantProps: PlasmicGamecontainers__VariantProps,
    internalArgProps: PlasmicGamecontainers__ArgProps
  }
);

export default PlasmicGamecontainers;
/* prettier-ignore-end */
