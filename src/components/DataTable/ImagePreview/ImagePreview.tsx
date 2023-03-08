import { Button } from "@mui/material";

interface Props {
  imgSrc?: string;
}

export function ImagePreview({ imgSrc }: Props) {
  if (!imgSrc) {
    return null;
  }
  return (
    <Button sx={{ padding: 0 }}>
      <img alt="Property image preview" src={imgSrc} width={45} height={45} />
    </Button>
  );
}
