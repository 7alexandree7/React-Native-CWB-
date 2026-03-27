# Arquitetura do Projeto

## Estrutura de Pastas
```
├── app/          # Telas (Expo Router)
├── CONST/        # Constantes
├── hooks/        # Hooks customizados
├── services/     # Chamadas à API
├── styles/       # Estilos separados
└── types/        # Tipagens TypeScript
```

## Camadas

### `services/`
Responsável **exclusivamente** pelas chamadas à API. Não conhece React, não gerencia estado — só busca e retorna dados.
```typescript
// services/pokemonService.ts
export async function fetchPokemons(): Promise<PokemonDetails[]> { ... }
```

### `hooks/`
Faz a ponte entre o service e o componente. Gerencia estado, loading e erro — mantendo a lógica fora da tela.
```typescript
// hooks/usePokemons.ts
export function usePokemons() {
  return { pokemons, loading, error };
}
```

### `types/`
Centraliza todas as tipagens TypeScript do projeto. Qualquer interface ou type usado em mais de um lugar vive aqui.
```typescript
// types/Pokemon.ts
export interface PokemonDetails { ... }
export interface IcolorByTypes { ... }
```

### `CONST/`
Armazena valores fixos que não mudam — como o mapeamento de cores por tipo.
```typescript
// CONST/colorsByType.ts
export const colorsByType: IcolorByTypes = {
  fire: "#EE8130",
  water: "#6390F0",
  ...
}
```

### `styles/`
Mantém os `StyleSheet` fora dos componentes, deixando as telas focadas apenas na estrutura visual.
```typescript
// styles/index.styles.ts
export const styles = StyleSheet.create({ ... })
```

## Fluxo de dados
```
API
 └── service      # busca os dados
      └── hook    # gerencia o estado
           └── screen  # renderiza a UI
```

## Princípio geral


Cada camada tem uma única responsabilidade. A tela não sabe como os dados são buscados, o service não sabe que o React existe.


<img width="296" height="429" alt="image" src="https://github.com/user-attachments/assets/061b6b33-65c3-43d3-ba56-18bbbc03f8bf" />
