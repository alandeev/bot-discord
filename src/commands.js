module.exports = [
  {
    names: ["a", "anonimo"],
    description: "Enviar mensagem anonima",
    role: 1,
    run: require('./commands/a'),
    channels: ['779105654886760477'],
  },
  {
    names: ["apostar"],
    description: "Apostar com amiguinhos!",
    role: 1,
    run: require('./commands/apostar'),
    channels: ['779105654886760477'],
  },
  {
    names: ["desc", "descricao"],
    description: "definir uma descrição no status",
    role: 1,
    run: require('./commands/desc'),
    channels: ['779105654886760477']
  },
  {
    names: ["l", "level"],
    description: "Exibir informações de nível do usuário",
    role: 5,
    run: require('./commands/level'),
    channels: ['779105654886760477']
  },
  {
    names: ["rank", "rankmsg"],
    description: "Exibir rank de usuários que mais conversam.",
    role: 0,
    run: require('./commands/rankmsg'),
    channels: ['779105654886760477']
  },
  {
    names: ["sorte"],
    description: "Gerar uma mensagem aleatoria",
    role: 1,
    run: require('./commands/sorte'),
    channels: ['779105654886760477']
  },
  {
    names: ["s", "status"],
    description: "Exibir informações sobre o usuário",
    role: 0,
    run: require('./commands/status'),
    channels: ['779105654886760477']
  }
]
