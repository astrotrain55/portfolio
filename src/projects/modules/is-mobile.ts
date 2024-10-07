import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'is-mobile',
  name: 'Запись к врачу',
  description: '"Запись к врачу" в мобильном приложении Интерсвязи',
  detail: `
Запись к врачу с выбором поликлиники, даты и времени.
Данные подгружаются из региональной медицинской системы.
Можно добавить несколько пациентов.
При добавлении полиса становятся доступны бесплатные записи.
Врачи могут открывать нужные подъезды.
`,
  tags: [
    'ajax',
    'gulp',
    'webpack',
    'stylus',
    'pug',
    'markup',
    'jquery',
    'smartgrid',
    'интерсвязь',
  ],
};