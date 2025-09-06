export type TopBarProps = {
    Logo?: string; // URL or path to the logo image
    Nav?: string[];
};
export type HeroProps = {
    Tagline?: string;
    Desctiption?: string;
    Logo?: string; // URL or path to the logo image
};
export type FooterProps = {
    Contacts?: string;
    Copyright?: string;
};

export type CardProps = { 
     id: number;
        title: string;
        description: string;
};
export interface ContainerProps {
 Title?: string;
  cards?: CardProps[];
};
export interface WrapperProps {
   containers?: ContainerProps[];
};