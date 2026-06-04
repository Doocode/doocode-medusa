export default interface MainActionProps {
    variant: "download" | "try" | "demo" | "repository" | "visit" | "help" | "contact";
    onClick?: (e: Event) => void;
    href?: string;
    text: string;
    withAccent?: boolean;
}