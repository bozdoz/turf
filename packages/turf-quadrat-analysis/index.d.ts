import { Point, FeatureCollection, Feature, GeometryObject } from '@turf/helpers'


/**
 * http://turfjs.org/docs/#quadratanalysis
 */

export interface QuadratAnalysisResult {
    criticalValue: number,
    maxAbsoluteDifference: number,
    isRandom: boolean,
    observedDistribution: Array<number>
}


export default function (
    pointFeatureSet: FeatureCollection<Point>,
    options?: {
        studyBbox?: [number, number, number, number]
        confidenceLevel?: number
    }
 ): QuadratAnalysisResult
