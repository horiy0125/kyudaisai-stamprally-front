import React from 'react';
import styles from '../../../styles/components/atoms/buttons/rounded-color-button.module.scss';

type Props = {
  icon?: React.ReactNode;
  label: React.ReactNode;
  onClick: () => void;
};
const RoundedColorButton: React.VFC<Props> = ({
  icon,
  label,
  onClick,
}: Props) => {
  return (
    <button className={styles.root} onClick={() => onClick()}>
      {icon ? <div>{icon}</div> : null}
      <span>{label}</span>
    </button>
  );
};

export default RoundedColorButton;
