import { AnyField, FormOptions } from 'tinacms';

interface ListItem {
  id: string;
  name: string;
}

interface Colors {
  bgColor: string;
}

export interface TestFormValues {
  colors: Colors;
  list: ListItem[];
}


export const CMS_CONFIG: FormOptions<TestFormValues> = {
  id: 'editor',
  label: 'Editor',
  fields: [
    {
      label: "Colors",
      name: "bgColor",
      type: "object",
      component: "group",
      fields: [
        {
          label: "Background Color",
          name: "bgColor",
          type: "string",
          component: "color",
        }
      ]
    },
    {
      label: "List",
      name: "list",
      type: "array",
      component: "group-list",
      itemProps: (item: ListItem) => ({
        key: item.id,
        label: item.name,
      }),
      fields: [
        {
          name: "id",
          label: "ID",
          type: "string",
          component: "text",
        },
        {
          name: "name",
          label: "Name",
          type: "string",
          component: "text",
        }
      ],
    }
  ],
  onSubmit: (values, form) => {
    console.log('values', values);
    console.log('form', form);
  },
  loadInitialValues: () => Promise.resolve({
    colors: {
      bgColor: "#FF0000"
    },
    list: Array.from(new Array(100)).map((_, i) => ({
      id: String(i),
      name: `Item ${i}`,
    }))
  })
}
