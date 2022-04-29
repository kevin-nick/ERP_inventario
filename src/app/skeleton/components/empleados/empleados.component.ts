import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { event } from 'jquery';
import { arch } from 'os';
import { promise } from 'protractor';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {
      dtOptions: DataTables.Settings = {};
      dtTrigger: Subject<any> = new Subject<any>();
      data: any;
      panelOpenState: boolean = false;
      checked = false;
      disabled = false;
      previsualizacion: string;
      nameTitle: string = 'Empleados';
      closeResult = '';
      public archivos: any = [];

      datos = [
    {
      id: 1,
      employee_name: 'Nick',
      employee_salary: '$100.00',
      employee_age: 'Developer'
    },
    {
      id: 2,
      employee_name: 'Kevin',
      employee_salary: '$400.00',
      employee_age: 'CTO'
    },
    {
      id: 3,
      employee_name: 'Torres',
      employee_salary: '$200.00',
      employee_age: 'Developer SR.'
    },
    {
      id: 4,
      employee_name: 'Kevin',
      employee_salary: '$400.00',
      employee_age: 'CTO'
    },
    {
      id: 5,
      employee_name: 'Torres',
      employee_salary: '$200.00',
      employee_age: 'Developer SR.'
    },
     {
      id: 6,
      employee_name: 'Nick',
      employee_salary: '$100.00',
      employee_age: 'Developer'
    },
    {
      id: 7,
      employee_name: 'Kevin',
      employee_salary: '$400.00',
      employee_age: 'CTO'
    },
    {
      id: 8,
      employee_name: 'Torres',
      employee_salary: '$200.00',
      employee_age: 'Developer SR.'
    },
    {
      id: 9,
      employee_name: 'Kevin',
      employee_salary: '$400.00',
      employee_age: 'CTO'
    },
    {
      id: 10,
      employee_name: 'Torres',
      employee_salary: '$200.00',
      employee_age: 'Developer SR.'
    }
      ];

      constructor(
        private http: HttpClient,
        private modalService: NgbModal,
        private formBuielder: FormBuilder,
        private sanitizer: DomSanitizer
      ) { }

      form: FormGroup;
      togglePanel(): any {
        this.panelOpenState = !this.panelOpenState;
      }
      ngOnInit(): void {

            this.form = this.formBuielder.group({
              nombre: ''
            });

            this.dtOptions = {
              pagingType: 'full_numbers',
              autoWidth: true,
              pageLength: 6,
              scrollY: "250px",
              scrollCollapse: true,
              lengthMenu : [5, 10, 25],
              processing: true,
              responsive: true,
              order: [0, 'desc'],
              dom: 'Bfrtip'
            };

            this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe((res: any) => {
              this.data = res.data;
              this.dtTrigger.next('');
            });
      }

      ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
      }

      open(content: any) {
          this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
      }

      close(){
          this.modalService.dismissAll();
      }

      private getDismissReason(reason: any): string {
          if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
          } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return `with: ${reason}`;
          }
      }

      guardarCambios(){
        alert("cambios");
      }

      capturarFile(event): any {
        const archivoCapturado = event.target.files[0];
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
           this.previsualizacion = imagen.base;
        });
        // this.archivos.push(archivoCapturado);
      }

      extraerBase64 = async  ($event: any) => new Promise((resolve, rejects) => {
        try {
          const unsafeImg = window.URL.createObjectURL($event);
          const imagen = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
          const reader = new FileReader();

          reader.readAsDataURL($event);
          reader.onload = () => {
            resolve({
              base: reader.result,
            });
            reader.onerror = error => {
               resolve({
                 base: null
               });
            };
          };
        }
        catch (e) {
            return null;
        }
      })
}
