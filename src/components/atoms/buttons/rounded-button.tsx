import React from 'react';
import styles from '../../../styles/components/atoms/buttons/rounded-color-button.module.scss';
import { combineClasses } from '../../../utils/combine-classes';

type Props = {
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};
const RoundedButton: React.VFC<Props> = ({
  icon,
  children,
  onClick,
  className,
  disabled,
}: Props) => {
  return (
    <button
      className={combineClasses(
        styles.root,
        className,
        disabled ? styles.disabled : null,
      )}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {icon ? <div>{icon}</div> : null}
      <span>{children}</span>
    </button>
  );
};

export default RoundedButton;
