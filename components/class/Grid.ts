export class ColumnDefs {
  headerName: string
  field?: string
  type?: string
  children?: { headerName?: string; field?: string }[]
  width?: string
  flex?: number
  hide?: boolean
  editable?: boolean
  cellStyle?: { [key: string]: string }
  cellEditor?: string
  headerCheckboxSelection?: boolean
  checkboxSelection?: boolean
  cellEditorPopup?: boolean
  cellEditorParams?: { values: any[] }
  valueFormatter?: (params: any) => string
  constructor(
    headerName: string,
    field?: string,
    type?: string,
    options: {
      width?: string
      flex?: number
      hide?: boolean
      editable?: boolean
      cellStyle?: { [key: string]: string }
      cellEditor?: string
      headerCheckboxSelection?: boolean
      checkboxSelection?: boolean
      cellEditorPopup?: boolean
      cellEditorParams?: { values: any[] }
      valueFormatter?: (params: any) => string
    } = {},
    children?: { headerName?: string; field?: string }[]
  ) {
    this.headerName = headerName
    this.field = field
    this.type = type
    this.children = children
    this.width = options.width
    this.flex = options.flex
    this.hide = options.hide
    this.editable = options.editable
    this.cellStyle = options.cellStyle
    this.cellEditor = options.cellEditor
    this.headerCheckboxSelection = options.headerCheckboxSelection
    this.checkboxSelection = options.checkboxSelection
    this.cellEditorPopup = options.cellEditorPopup
    this.cellEditorParams = options.cellEditorParams
    this.valueFormatter = options.valueFormatter
  }
}

export class GridRef {
  clickEventUse: boolean
  pagingUse: boolean
  checkBoxUse: boolean
  excelExportUse: boolean
  filterUse: boolean
  height?: number
  rowSelection?: string
  clickField?: string[]
  constructor(
    clickEventUse: boolean,
    pagingUse: boolean,
    checkBoxUse: boolean,
    excelExportUse: boolean,
    filterUse: boolean,
    options: {
      height?: number
      rowSelection?: string
      clickField?: string[]
    } = {}
  ) {
    this.clickEventUse = clickEventUse
    this.pagingUse = pagingUse
    this.checkBoxUse = checkBoxUse
    this.excelExportUse = excelExportUse
    this.filterUse = filterUse
    this.clickField = options.clickField
    this.height = options.height
    this.rowSelection = options.rowSelection
  }
}

export class GridValidOption {
  label: string
  field: string
  type: string
  constructor(label: string, field: string, type: string) {
    this.label = label
    this.field = field
    this.type = type
  }
}

export interface GridComponentRef {
  addRow: (newItems: any) => void
  delRow: () => void
  saveRow: () => any
}
