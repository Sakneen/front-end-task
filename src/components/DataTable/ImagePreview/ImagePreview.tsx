import { Button } from "@mui/material";

interface Props {
  imgSrc?: string;
  onClick: () => void;
}

export function ImagePreview({ imgSrc, onClick }: Props) {
  if (!imgSrc) {
    return null;
  }
  return (
    <Button sx={{ padding: 0 }} onClick={onClick}>
      <img alt="Property image preview" src={imgSrc} width={45} height={45} />
    </Button>
  );
}
