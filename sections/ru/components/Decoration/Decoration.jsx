import { bp } from "../../../../app.config";

export const Decoration = props => {
  const {
    w,
    h,
    bgColor,
    color,
    index,
    top,
    left,
    bottom,
    right,
    opacity,
    css,
    xs,
    sm,
    md,
    lg,
    children
  } = props;

  return (
    <>
      <div className="abstraction">{children}</div>
      <style jsx>{`  
            .abstraction {
                ${css || ""}        
                position: absolute;
                transition: none 0s ease 0s;
                width: var(--width,${w || "unset"});
                height: var(--height,${h || "unset"});
                background: var(--bgColor,${bgColor || "transparent"});
                color: var(--color, ${color || "#fff"});
                opacity: var(--opacity,${opacity || 1}); 
                z-index: var(--z-index,${index || 1});
                top: var(--top,${top || "unset"});
                left: var(--left,${left || "unset"});
                bottom: var(--bottom,${bottom || "unset"});
                right: var(--right,${right || "unset"});
            }

            @media (max-width: ${bp.lg}){ 
                    .abstraction {
                        ${lg || ""};
                    }
            }; 
            @media (max-width: ${bp.md}){ 
                .abstraction {
                    ${md || ""};
                }
            };
            @media (max-width: ${bp.sm}){ 
                .abstraction {
                    ${sm || ""};
                }
            @media (max-width: ${bp.xs}){ 
                .abstraction {
                    ${xs || ""};
                }
            };
            `}</style>
    </>
  );
};
