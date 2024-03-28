export const SidebarData = [
  {
    title: 'Controle de Veículos',
    path: 'vehicle-control',
    icon: 'Car',
    submenu: [
      {
        path: 'municipal-vehicles',
        title: 'Veículos Municipais',
      },
      {
        path: 'leased-vehicles',
        title: 'Veículos Locados',
      },
      {
        path: 'granted-vehicles',
        title: 'Veículos Cedidos',
      },
    ],
  },
  {
    title: 'Controle de Custos',
    path: 'cost-control',
    icon: 'Cost',
    submenu: [
      {
        path: 'fuel-control',
        title: 'Abastecimento',
      },
      {
        path: 'maintenance-control',
        title: 'Manutenção',
      },
    ],
  },
  {
    title: 'Contas',
    path: 'bills',
    icon: 'Bill',
    submenu: [
      {
        path: 'registry-of-responsible',
        title: 'Cadastro de Responsáveis',
      },
      {
        path: 'generation-and-dispatch',
        title: 'Manutenção',
      },
    ],
  },
]
