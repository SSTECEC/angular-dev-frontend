import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { CecyService } from '../../../../services/cecy/cecy.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/auth/user';
import { Necesidad } from 'src/app/models/cecy/necesidad';
import { Requisito } from 'src/app/models/cecy/requisito';
import { Curso } from 'src/app/models/cecy/curso';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-cecy-form',
  templateUrl: './form.component.html',
})
export class FormsComponent implements OnInit {

  user: User;
  nombreDocente: any;

  //curso : Curso;

  public curso : any = {
    id_curso:0,
    name:'',
    code:'',   
    free:'',
    cost:'',
    hours_duration:'',
    capacity:'', 
    place:'', 
    resume:'', 
    career:'',
    course_period:'', 
    user_id:0,
    user_name:'',
    course_type:'', 
    modality:'', 
    participant_type:'',
    lista_necesidades:'',
    photo:'',
    area:'',
    specialty:'',
    lista_requisitos:'',
    lista_temas_principales:'',
    lista_temas_secundarios:'',
    lista_temas_transversales:'',
    lista_evaluaciones_diagnosticas:'',
    lista_evaluaciones_procesos:'',
    lista_evaluaciones_finales:'',
    practice_hours:'',
    theory_hours:'',
    bibliographys:'',
    lista_instalaciones:'',
    lista_fases_teoricas:'',
    lista_fases_practicas:'',
    observation:''
  }

  value: boolean;

  formCurso: FormGroup;

  carrers: SelectItem[];
  academic_periods: SelectItem[];

  url_combo = "combo";

  list_carrers = [];
  list_academic_periods = [];
  list_course_type = [];
  list_modality = [];
  list_participant_type = [];
  list_aerea = [];
  list_specialty = [];

  necesidades: Necesidad [] = [];
  necesidadText:any;

  requisitos : Requisito [] = [];
  requisitoText:any;

  temasPrincipales : Requisito [] = [];
  pricipalText:any;

  temasSecundarios : Requisito [] = [];
  secundaryText:any;

  temasTransversales : Requisito [] = [];
  transversalText:any;

  instalaciones : Requisito [] = [];
  instalacionText:any;

  fasesTeoricas : Requisito [] = [];
  faseTeoricaText:any;

  fasesPracticas : Requisito [] = [];
  fasePracticaText:any;

  msgs : any;

  evaluacionesDiagnosticas : any = [];
  evaluacionDiagnostica : any = {
    tecnica : '',
    instrumento:''
  }

  evaluacionesProcesos : any = [];
  evaluacionProceso : any = {
    tecnica : '',
    instrumento:''
  }


  evaluacionesFinales : any = [];
  evaluacionFinal : any = {
    tecnica : '',
    instrumento:''
  }

  imagenCurso : any;

  carreraSeleccionada:any;
  periodoSeleccionado:any;
  tipoCursoSeleccionado:any;
  modalidadSeleccionada:any;
  tipoParticipanteSeleccionado:any;
  areaSeleccionada:any;
  especialidadSeleccionada:any;

  constructor(private cecyService: CecyService, private formBuilder: FormBuilder, 
              private messageService: MessageService, private _router: Router) {
    this.buildForm();
  }

  ngOnInit() {
    console.log('Imagen',this.imagenCurso);
    this.getLocalStorage();
    this.listarCombos();
  }

  public getLocalStorage() {
    this.user = JSON.parse(localStorage.getItem('user')) as User;
    this.curso.user_name = this.user.first_name + " " + this.user.second_name + " " + this.user.first_lastname + " " + this.user.second_lastname;
    this.curso.user_id = this.user.id;
     console.log('usuario', this.user);
  }


  public listarCombos() {
    this.cecyService.get("combo", "").subscribe(
      (res: any) => {
        console.log(res);
        this.list_carrers = res.career;
        this.list_academic_periods = res.academic_period;
        this.list_course_type = res.course_type;
        this.list_modality = res.modality;
        this.list_participant_type = res.participant_type;
        this.list_aerea = res.aerea;
        this.list_specialty = res.specialty;
      },
      err => {
        console.log(err);
      }
    );
  }

  private buildForm() {
    this.formCurso = this.formBuilder.group({
      name: ['', Validators.required],
      //code: ['', Validators.required],
      //free: ['', [Validators.required]],
      //cost: ['', [Validators.required]],
      //hours_duration: ['', [Validators.required]],
      //capacity: ['', [Validators.required]],
      //place: ['', [Validators.required]],
      //resume: ['', [Validators.required]]
    //career_id:number;
    //course_period_id:number;
    //user_id:number;
    //course_type_id:number;
    //modality_id:string;//participant_type_id:number;
    });

  }

  add_necesidad(event:Event){
    console.log(this.necesidadText);
    event.preventDefault();
    if(this.necesidadText != undefined){
      if(this.necesidadText != ""){
        this.necesidades.push(this.necesidadText);
        this.necesidadText = "";
      }else{
        this.showViaService('necesidad');
      }
    }else{
      this.showViaService('necesidad');
    }
  }

  delete_necesidad(necesidadesSelected:any){
    var indice = this.necesidades.indexOf(necesidadesSelected); // obtenemos el indice
    this.necesidades.splice(indice, 1);
  }

  add_requisito(event:Event){
    event.preventDefault();
    this.requisitos.push(this.requisitoText);
    this.requisitoText = "";
  }

  delete_requisito(requisitoSelected:any){
    var indice = this.requisitos.indexOf(requisitoSelected); // obtenemos el indice
    this.requisitos.splice(indice, 1);
  }

  add_tema_principal(event:Event){
    event.preventDefault();
    this.temasPrincipales.push(this.pricipalText);
    this.pricipalText = "";
  }

  delete_tema_principal(temaPrincipalSelected:any){
    var indice = this.temasPrincipales.indexOf(temaPrincipalSelected); // obtenemos el indice
    this.temasPrincipales.splice(indice, 1);
  }

  add_tema_secundario(event:Event){
    event.preventDefault();
    this.temasSecundarios.push(this.secundaryText);
    this.secundaryText = "";
  }

  delete_tema_secundario(temaSecundarioSelected:any){
    var indice = this.temasSecundarios.indexOf(temaSecundarioSelected); // obtenemos el indice
    this.temasSecundarios.splice(indice, 1);
  }

  add_tema_transversal(event:Event){
    event.preventDefault();
    this.temasTransversales.push(this.transversalText);
    this.transversalText = "";
  }

  delete_tema_transversal(temaTransversalSelected:any){
    var indice = this.temasTransversales.indexOf(temaTransversalSelected); // obtenemos el indice
    this.temasTransversales.splice(indice, 1);
  }

  add_evaluacion_diagnostica(event:Event){
    this.evaluacionesDiagnosticas.push(this.evaluacionDiagnostica);
    console.log(this.evaluacionesDiagnosticas);
    this.evaluacionDiagnostica = {
      tecnica : '',
      instrumento:''
    }
  }

  delete_evaluacion_diagnostica(evaluacionDiagnosticaSelected:any){
    console.log(evaluacionDiagnosticaSelected);
    var indice = this.evaluacionesDiagnosticas.indexOf(evaluacionDiagnosticaSelected); // obtenemos el indice
    this.evaluacionesDiagnosticas.splice(indice, 1);
  }

  add_proceso_formativo(event:Event){
    this.evaluacionesProcesos.push(this.evaluacionProceso);
    console.log(this.evaluacionesProcesos);
    this.evaluacionProceso= {
      tecnica : '',
      instrumento:''
    }
  }

  delete_proceso_formativo(evaluacionProcesoSelected:any){
    console.log(evaluacionProcesoSelected);
    var indice = this.evaluacionesProcesos.indexOf(evaluacionProcesoSelected); // obtenemos el indice
    this.evaluacionesProcesos.splice(indice, 1);
  }

  
  add_proceso_final(event:Event){
    this.evaluacionesFinales.push(this.evaluacionFinal);
    console.log(this.evaluacionesFinales);
    this.evaluacionFinal= {
      tecnica : '',
      instrumento:''
    }
  }

  delete_proceso_final(evaluacionFinalSelected:any){
    console.log(evaluacionFinalSelected);
    var indice = this.evaluacionesFinales.indexOf(evaluacionFinalSelected); // obtenemos el indice
    this.evaluacionesFinales.splice(indice, 1);
  }

  add_instalacion(event:Event){
    event.preventDefault();
    this.instalaciones.push(this.instalacionText);
    this.instalacionText = "";
  }

  delete_instalacion(instalacionSelected:any){
    var indice = this.instalaciones.indexOf(instalacionSelected); // obtenemos el indice
    this.instalaciones.splice(indice, 1);
  }

  add_fase_teorica(event:Event){
    event.preventDefault();
    this.fasesTeoricas.push(this.faseTeoricaText);
    this.faseTeoricaText = "";
  }

  delete_fase_teorica(faseTeoricaSelected:any){
    var indice = this.fasesTeoricas.indexOf(faseTeoricaSelected); // obtenemos el indice
    this.fasesTeoricas.splice(indice, 1);
  }

  add_fase_practica(event:Event){
    event.preventDefault();
    this.fasesPracticas.push(this.fasePracticaText);
    this.fasePracticaText = "";
  }

  delete_fase_practica(fasePracticaSelected:any){
    var indice = this.fasesPracticas.indexOf(fasePracticaSelected); // obtenemos el indice
    this.fasesPracticas.splice(indice, 1);
  }

  showViaService(texto:any) {
    this.messageService.add({severity:'error', summary:'Información', detail:'Debe llenar el campo '+texto});
  }


  myUploader(event) {

    console.log("EVENTO",event);

    var files = event.files;
    console.log(files);
    var reader = new FileReader();
    if (files.length > 0) {
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        var base64Large: any = reader.result;
        this.imagenCurso = base64Large;
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }

  onSubmitCursoForm(event) {
    //event.preventDefault();
    console.log('onSubmitCursoForm',this.curso);
    console.log('onSubmitCursoForm',this.formCurso);
    
    if (this.formCurso.valid) {
      console.log('if');
    } else {
//        this.formCurso.markAllAsTouched();
console.log('else');
    }
}


public guardarCurso(){
  
  console.log('temas 1',JSON.stringify(this.temasPrincipales));
  console.log('temas 2',this.temasSecundarios);
  console.log('temas 3',this.temasTransversales);

  this.curso.lista_necesidades = this.necesidades == null ? '' : JSON.stringify(this.necesidades);
  this.curso.lista_requisitos = this.requisitos == null ? '' :  JSON.stringify(this.requisitos);
  this.curso.lista_temas_principales = this.temasPrincipales == null ? '' :  JSON.stringify(this.temasPrincipales);
  this.curso.lista_temas_secundarios = this.temasSecundarios == null ? '' :  JSON.stringify(this.temasSecundarios);
  this.curso.lista_temas_transversales = this.temasTransversales == null ? '' :  JSON.stringify(this.temasTransversales);
  this.curso.lista_evaluaciones_diagnosticas = this.evaluacionesDiagnosticas == null ? '' :  JSON.stringify(this.evaluacionesDiagnosticas);
  this.curso.lista_evaluaciones_procesos =this.evaluacionesProcesos == null ? '' :   JSON.stringify(this.evaluacionesProcesos);
  this.curso.lista_evaluaciones_finales = this.evaluacionesFinales == null ? '' :  JSON.stringify(this.evaluacionesFinales);
  this.curso.lista_instalaciones = this.instalaciones == null ? '' :  JSON.stringify(this.instalaciones);
  this.curso. lista_fases_teoricas = this.fasesTeoricas == null ? '' :  JSON.stringify(this.fasesTeoricas);
  this.curso.lista_fases_practicas = this.fasesPracticas == null ? '' :  JSON.stringify(this.fasesPracticas);

  this.curso.career = this.carreraSeleccionada == undefined ? 0 : this.carreraSeleccionada.id;
  this.curso.course_period = this.periodoSeleccionado == undefined ? 0 : this.periodoSeleccionado.id;
  this.curso.course_type = this.tipoCursoSeleccionado == undefined ? 0 :this.tipoCursoSeleccionado.id;
  this.curso.modality = this.modalidadSeleccionada == undefined ? 0 : this.modalidadSeleccionada.id;
  this.curso.participant_type = this.tipoParticipanteSeleccionado == undefined ? 0 : this.tipoParticipanteSeleccionado.id;
  this.curso.area = this.areaSeleccionada == undefined ? 0 : this.areaSeleccionada.id;
  this.curso.specialty = this.especialidadSeleccionada == undefined ? 0 : this.especialidadSeleccionada.id;

  this.curso.cost = this.curso.cost == '' ? '00.00' : this.curso.cost;


  this.curso.free = this.value;
  this.curso.photo = this.imagenCurso;


  console.log("CURSO",this.curso);
  console.log("value",this.value);


  this.cecyService.post("create", this.curso,"").subscribe(
    (res: any) => {
      console.log(res);
      if(res.msg.code == '200'){
        console.log('Curso guardado Exitosamente.');
        this._router.navigate(['/cecy/courses']);
      }
    },
    err => {
      console.log(err);
    }
  );


}

  

  /* 

  filter(event: { query: string; }) {
    this.cecyService.getCombos(this.url_combo).subscribe(
      response => {
        console.log('Respuesta', response);
        this.carrers = [];
        const carrers = response['career'];
        this.academic_periods = [];
        const academic_periods = response['academic_period'];
        for (const item of carrers) {
          const career = item.name;
          if (career.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
            this.carrers.push(career);
            console.log(career);


          }
        }
        for (const item of academic_periods) {
          const academic_period = item.name;
          if (academic_period.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
            this.academic_periods.push(academic_period);
            console.log(academic_period);

          }
        }
      },
      error => {
        console.log(error);
      });
  } */

}