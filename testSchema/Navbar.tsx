export const navbarSchema = {
  name: 'navbar',
  title: 'Navbar Configuration',
  type: 'document',
  fields: [
    {
      name: 'logoText',
      title: 'Logo Text / Business Name',
      type: 'string',
      initialValue: 'JIBA CONSTRUCTION',
    },
    {
      name: 'rcNumber',
      title: 'RC Number Label',
      type: 'string',
      initialValue: 'RC: 1805786',
    },
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navLink',
          title: 'Link / Dropdown',
          fields: [
            { name: 'title', title: 'Link Title', type: 'string' },
            { name: 'href', title: 'URL Target (if no dropdown)', type: 'string' },
            {
              name: 'dropdownItems',
              title: 'Dropdown Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'title', title: 'Sub Link Title', type: 'string' },
                    { name: 'href', title: 'URL Path', type: 'string' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        { name: 'label', title: 'Button Text', type: 'string', initialValue: 'CONTACT US' },
        { name: 'href', title: 'Button URL', type: 'string', initialValue: '#contact' },
      ],
    },
  ],
};