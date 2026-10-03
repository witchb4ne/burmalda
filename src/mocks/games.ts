export const getGamesMock = (): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Слоты',
          icon: '🎰',
          description: 'Испытай удачу в слот-машине!',
        },
        {
          id: 2,
          name: 'Рулетка',
          icon: '🎡',
          description: 'Сделай ставку на число или цвет',
        },
        {
          id: 3,
          name: 'Блэкджек',
          icon: '🃏',
          description: 'Набери 21 и обыграй дилера',
        },
      ])
    }, 1000)
  })
}