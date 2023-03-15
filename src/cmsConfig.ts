import { FormOptions } from 'tinacms';

export const CMS_CONFIG: FormOptions<any> = {
  id: 'editor',
  label: 'Editor',
  fields: [
    {
      label: "Background Color",
      name: "bgColor",
      type: "string",
      component: "color",
    }
  ],
  onSubmit: (values, form) => {
    console.log('values', values);
    console.log('form', form);
  }
}
