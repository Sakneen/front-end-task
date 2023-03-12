import IcoMoon, { IconProps } from "react-icomoon";
import iconSet from "../../public/selection.json";

export default function Icon(props: IconProps) {

    return (
        <IcoMoon iconSet={iconSet} {...props} />
    )
}
