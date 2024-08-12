import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam consequuntur molestiae illo. Modi expedita deserunt quae, architecto itaque nemo neque sequi laudantium sit obcaecati reprehenderit aut tempora tempore placeat aperiam maiores ea earum laboriosam deleniti sunt pariatur ad quam laborum voluptas! Velit tempore dolore ullam quas sit sapiente perspiciatis rem id aperiam beatae sunt maiores quaerat obcaecati, illo ratione nesciunt! Non soluta tempore voluptatem.',
      autoria: 'Autor Desconhecido',
      modelo: 'modelo3',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
