/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.SphereGeometry = function SphereGeometry( radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength ) {

	THREE.Geometry.call( this );

	this.parameters = {
		radius: radius,
		widthSegments: widthSegments,
		heightSegments: heightSegments,
		phiStart: phiStart,
		phiLength: phiLength,
		thetaStart: thetaStart,
		thetaLength: thetaLength
	};

	this.fromBufferGeometry( new THREE.SphereBufferGeometry( radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength ) );

};

THREE.SphereGeometry.prototype = Object.create( THREE.Geometry.prototype );
THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry;

THREE.SphereGeometry.prototype.clone = function () {

	var geometry = new THREE.SphereGeometry(
		this.parameters.radius,
		this.parameters.widthSegments,
		this.parameters.heightSegments,
		this.parameters.phiStart,
		this.parameters.phiLength,
		this.parameters.thetaStart,
		this.parameters.thetaLength
	);

	return geometry;

};
