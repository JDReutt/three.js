/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.RawShaderMaterial = function RawShaderMaterial( parameters ) {

	THREE.ShaderMaterial.call( this, parameters );

};

THREE.RawShaderMaterial.prototype = Object.create( THREE.ShaderMaterial.prototype );
THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial;
