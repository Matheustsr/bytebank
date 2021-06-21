import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[] | undefined;
  constructor(private service: TransferenciaService){
  }
  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) =>{
      this.transferencias = transferencias;
    })
  }

}
