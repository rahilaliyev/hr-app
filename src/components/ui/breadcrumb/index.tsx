import { Breadcrumbs, Link, Typography } from '@mui/material';

interface IBreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface IBreadcrumbProps {
  items: IBreadcrumbItem[];
}

export const Breadcrumb = ({ items }: IBreadcrumbProps) => (
  <Breadcrumbs
    aria-label="breadcrumb"
    sx={{
      fontSize: (theme) => theme.typography.caption,
    }}
  >
    {items.map((item, index) =>
      item.href && !item.active ? (
        <Link key={index} underline="hover" color="inherit" href={item.href}>
          <Typography variant="caption">{item.label}</Typography>
        </Link>
      ) : (
        <Typography key={index} variant="caption" sx={{ color: item.active ? 'text.primary' : undefined }}>
          {item.label}
        </Typography>
      ),
    )}
  </Breadcrumbs>
);
