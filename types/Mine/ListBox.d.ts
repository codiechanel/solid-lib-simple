interface ListBoxProps {
    show: any;
    options: any;
    onSelect: Function;
    displayKey?: string;
}
export default function ListBox({ show, options, onSelect, displayKey }: ListBoxProps): import("solid-js").JSX.Element;
export {};
