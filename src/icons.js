import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
	faChartBar,
	faCheck,
	faClock,
	faColumns,
	faCog,
	faDotCircle,
	faExpand,
	faPencilAlt,
	faPlusSquare,
	faPowerOff,
	faTimes,
	faTrashAlt,
	faTv,
	faVideo,
	faVolumeUp,
	faWindowMaximize
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(
	faChartBar,
	faCheck,
	faClock,
	faColumns,
	faCog,
	faDotCircle,
	faExpand,
	faPencilAlt,
	faPlusSquare,
	faPowerOff,
	faTimes,
	faTrashAlt,
	faTv,
	faVideo,
	faVolumeUp,
	faWindowMaximize
)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
