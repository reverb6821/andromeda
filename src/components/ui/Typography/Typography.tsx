import classnames from "classnames";
import * as React from "react";

import { TypographyProps } from '@/interfaces/components.properties';

const Typography: React.FC<TypographyProps> = ({
    textStyle,
    textSize,
    text,
    classNames
}) => {
  return (
    <React.Fragment>
      <p
        className={classnames(
            `${classNames}`,
          {
            "text-color-primary": textStyle === 'primary',
            "text-color-secondary": textStyle === 'secondary',
            "text-xs": textSize === 'caption',
            "text-base" : textSize === 'regular',
            "text-xl" : textSize === 'xl',
            "text-2xl" : textSize === '2xl',
            "text-3xl" : textSize === '3xl',
          }
        )}
      >
        {text}
      </p>
    </React.Fragment>
  );
};

export default Typography;