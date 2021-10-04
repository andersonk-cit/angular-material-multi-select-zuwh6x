import { Component } from '@angular/core';

/** @title Select with multiple selection */
@Component({
  selector: 'select-multiple-example',
  templateUrl: 'select-multiple-example.html',
  styleUrls: ['select-multiple-example.css'],
})
export class SelectMultipleExample {
  tiposLancamento = [
    'Pix',
    'Aplicação',
    'Câmbio',
    'DOC',
    'Empréstimo',
    'Pagamento',
    'Resgate',
    'Tarifa',
    'TED',
    'Transferência',
  ];

  tiposLancamentoSelecionados = [];

  public openedChange(opened: boolean) {
    const stringConcatenada = this.tiposLancamentoSelecionados.join(' ');
    if (!opened) {
      console.log(
        'emitir evento para chamada na API com a string concatenada! Exemplo: ',
        stringConcatenada
      );
    }
  }

  public reset(event) {
    this.tiposLancamentoSelecionados = [];
    event.stopPropagation();
    console.log('emitir evento para chamada na API zerando o filtro!');
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
