export type Meta = {
  title: string;
};

export interface ComponentLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export interface ComponentMDXLayoutProps extends ComponentLayoutProps {
  meta: Meta;
}
